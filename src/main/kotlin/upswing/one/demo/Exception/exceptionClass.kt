package upswing.one.demo.Exception

class UserNotFoundException(message: String) : RuntimeException(message)
class BadRequestException(message: String) : RuntimeException(message)
class ConflictException(message: String) : RuntimeException(message)
