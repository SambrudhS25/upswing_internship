package upswing.one.demo.Service

import jakarta.transaction.Transactional
import org.slf4j.Logger
import org.slf4j.LoggerFactory
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.stereotype.Service
import org.springframework.web.bind.annotation.PostMapping
import upswing.one.demo.Exception.BadRequestException
import upswing.one.demo.Exception.ConflictException
import upswing.one.demo.Exception.UserNotFoundException
import upswing.one.demo.Model.Audit
import upswing.one.demo.Model.Users
import upswing.one.demo.Producer.AuditPublisher
import upswing.one.demo.Repository.UserRepo
import java.time.LocalDateTime
import java.util.*
import kotlin.jvm.Throws

@Service
class UserService(@Autowired val userRepo:UserRepo,@Autowired val auditPublisher: AuditPublisher) {

    private val logger: Logger = LoggerFactory.getLogger(UserService::class.java)

    @Transactional
    fun searchUserById(id: Long): Users{
        val user = userRepo.findById(id)
        if (user.isPresent) {
            logger.info("User with ID $id found: ${user.get()}")
            val audit= Audit(user_id = id, action = "SEARCH_BY_ID", status =  true,timestamp = LocalDateTime.now())
            auditPublisher.publishMessage("searched for user with id: ${id} failed",audit=audit)
            return user.get()
        } else {
            logger.warn("User with ID $id not found.")
            val audit= Audit(user_id = id, action = "SEARCH_BY_ID", status = false,timestamp = LocalDateTime.now())
            auditPublisher.publishMessage(msg = "searched for user with id: ${id}",audit=audit)
            throw UserNotFoundException("User with ID $id not found")
        }
    }

    @Transactional
    fun createUser(user: Users): Users {
        if (user.id != null) {
            if (userRepo.existsById(user.id)) {
                logger.warn("Attempted to create user with duplicate id: ${user.id}")
                val audit= Audit(user_id = user.id, action = "CREATE_USER", status = false, timestamp = LocalDateTime.now())
                auditPublisher.publishMessage("creating user failed: ${user}",audit=audit)
                throw ConflictException("user with id already exists, try modifying the user details")
            }
        }
                logger.info("User created: $user")
                val audit= Audit(user_id = user.id, action = "CREATE_USER", status = true, timestamp = LocalDateTime.now())
                auditPublisher.publishMessage("created a user: ${user}",audit=audit)
                return userRepo.save(user)

    }

    @Transactional
    fun deleteUser(id: Long): String {
        val user = userRepo.findById(id).orElseThrow {
            val audit= Audit(user_id = id, action = "deleted user", status = false, timestamp = LocalDateTime.now())
            auditPublisher.publishMessage("deleting user with id: ${id} failed",audit=audit)
           UserNotFoundException("User with ID $id not found")
        }
        logger.info("User with ID $id found: ${user.id}, deleting user")
        val audit= Audit(user_id = id, action = "deleted user", status = true, timestamp = LocalDateTime.now())
        auditPublisher.publishMessage("deleted user with id: ${id}",audit=audit)
        userRepo.delete(user)
        return "user successfully deleted"
    }

    @Transactional
    fun updateUser(user: Users): Users {
        if (user.id != null) {
            if (userRepo.existsById(user.id)) {
                logger.info("User found with id: ${user.id}, updating user details")
                val audit= Audit(user_id = null, action = "UPDATE_USER",status=true, timestamp = LocalDateTime.now())
                auditPublisher.publishMessage("updated user with id: ${user.id}",audit=audit)
            }else {
                logger.error("user not found")
                val audit= Audit(user_id = user.id, action = "UPDATED_USER", status = false, timestamp = LocalDateTime.now())
                auditPublisher.publishMessage("updating user with id: ${user.id} failed",audit=audit)
                throw BadRequestException("please enter valid id")
            }
        }
        logger.info("user updated: ${user}")
        return userRepo.save(user)

    }

    @Transactional
    fun getByName(name:String): List<Users> {
        val user = userRepo.findByName(name)
        if (user.isNotEmpty()) {
            logger.info("User with name $name found: ${user}")
            val audit= Audit(user_id =null, action = "SEARCH_BY_NAME", status = true, timestamp = LocalDateTime.now())
            auditPublisher.publishMessage("searched by name: ${name}",audit=audit)
            return user
        } else {
            logger.warn("User with name $name not found.")
            val audit= Audit(user_id = null, action = "SEARCH_BY_NAME", status = false, timestamp = LocalDateTime.now())
            auditPublisher.publishMessage("searching by name: ${name} failed",audit=audit)
            throw UserNotFoundException("User with name $name not found  ")
        }
    }


    @Transactional
    fun getAllUsers(): List<Users> {
        logger.info("displaying all users")
        val audit= Audit(user_id = null, action = "GET_ALL_USERS", status = true, timestamp = LocalDateTime.now())
        auditPublisher.publishMessage("searched for all users",audit=audit)
        return userRepo.findAll()
    }
}

