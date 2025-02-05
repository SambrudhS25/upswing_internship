package upswing.one.demo.Model

import jakarta.persistence.Column
import jakarta.persistence.Entity
import jakarta.persistence.Id
import jakarta.persistence.Table
import jakarta.validation.constraints.NotBlank


@Entity
@Table(name="users")
data class Users (
    @Id
    val id: Long?=null,
    @Column(nullable = false)
    val name:String?=null,
    val address:String?=null,
    @Column(unique = true, nullable = false)
    val phoneNo:Long?=null
)
{}