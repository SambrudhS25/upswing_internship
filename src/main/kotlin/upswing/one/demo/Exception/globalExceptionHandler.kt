package upswing.one.demo.Exception

import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.ControllerAdvice
import org.springframework.web.bind.annotation.ExceptionHandler

@ControllerAdvice
class globalExceptionHandler {

    @ExceptionHandler(UserNotFoundException::class)
    fun HandleUserNotFound(ex:UserNotFoundException):ResponseEntity<String>{
        return ResponseEntity(ex.message,HttpStatus.NOT_FOUND)
    }

    @ExceptionHandler(ConflictException::class)
    fun HandleConflictException(ex:ConflictException):ResponseEntity<String>{
        return ResponseEntity(ex.message,HttpStatus.CONFLICT)
    }

    @ExceptionHandler(BadRequestException::class)
    fun handleBadRequest(ex: BadRequestException): ResponseEntity<String> {
        return ResponseEntity(ex.message, HttpStatus.BAD_REQUEST)
    }

    @ExceptionHandler(Exception::class)
    fun handleGeneralException(ex: Exception): ResponseEntity<String> {
        return ResponseEntity("An unexpected error occurred: ${ex.message}", HttpStatus.INTERNAL_SERVER_ERROR)
    }
}