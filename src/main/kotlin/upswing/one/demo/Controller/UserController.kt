package upswing.one.demo.Controller

import jakarta.validation.Valid
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.validation.BindingResult
import org.springframework.web.bind.annotation.*
import upswing.one.demo.Exception.BadRequestException
import upswing.one.demo.Model.Audit
import upswing.one.demo.Model.Users
import upswing.one.demo.Producer.AuditPublisher
import upswing.one.demo.Service.UserService
import java.time.LocalDateTime

@RestController
@RequestMapping("/user")
@CrossOrigin(origins = ["http://localhost:3000"])
data class UserController(@Autowired val userService: UserService)
{
    @GetMapping("/searchUser")
    fun searchUserById(@RequestParam(defaultValue = "1") id:Long):Users{
            return userService.searchUserById(id)
    }

    @GetMapping("getAllUsers")
    fun getAllUsers():List<Users>{
        return userService.getAllUsers()
    }

    @PostMapping("/createUser")
    fun createUser(@RequestBody user: Users):Users{
        return userService.createUser(user)
    }

    @DeleteMapping("/deleteUser")
    fun deleteUser(@RequestParam id:Long):String{
        return userService.deleteUser(id)
    }

    @PostMapping("/updateUser")
    fun updateUser(@RequestBody user: Users):Users{
        return userService.updateUser(user)
    }

    @GetMapping("/getByName")
    fun getUserByName(@RequestParam name:String):List<Users>{
        return userService.getByName(name)
    }

}