package upswing.one.demo.Model

import jakarta.persistence.Column
import jakarta.persistence.Entity
import jakarta.persistence.Id
import jakarta.persistence.Table

@Entity
@Table(name="users")
data class Users (
    @Id
    val id: Long?=null,
    
    val name:String?=null,
    val address:String?=null,
    @Column(unique = true)
    val phoneNo:Long?=null
)
{}