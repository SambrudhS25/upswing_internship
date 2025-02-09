package upswing.one.demo.Service

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
import upswing.one.demo.Model.Users
import upswing.one.demo.Repository.UserRepo
import java.util.*

@Service
class UserService(@Autowired val userRepo:UserRepo) {

    private val logger: Logger = LoggerFactory.getLogger(UserService::class.java)

    fun searchUserById(id: Long): Users{
        val user = userRepo.findById(id)
        if (user.isPresent) {
            logger.info("User with ID $id found: ${user.get()}")
            return user.get()
        } else {
            logger.warn("User with ID $id not found.")
            throw UserNotFoundException("User with ID $id not found")
        }
    }

    fun createUser(user: Users): Users {
        if (user.id != null) {
            if (userRepo.existsById(user.id)) {
                logger.warn("Attempted to create user with duplicate id: ${user.id}")
                throw ConflictException("user with id already exists, try modifying the user details")
            }
        }
                logger.info("User created: $user")
                return user

    }

    fun deleteUser(id: Long): String {
        val user = userRepo.findById(id).orElseThrow {
            UserNotFoundException("User with ID $id not found") }
        logger.info("User with ID $id found: ${user.id}")
        userRepo.deleteById(id)
        return "successfully removed user"

    }

    fun updateUser(user: Users): Users {
        if (user.id != null) {
            if (userRepo.existsById(user.id)) {
                logger.info("User found with id: ${user.id}")
            }else {
                logger.error("user not found")
                throw BadRequestException("please enter valid id")
            }
        }
        logger.info("user updated: ${user}")
        return userRepo.save(user)

    }
}

