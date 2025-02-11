package upswing.one.demo.Model

import jakarta.persistence.Entity
import jakarta.persistence.GeneratedValue
import jakarta.persistence.GenerationType
import jakarta.persistence.Id
import jakarta.persistence.Table
import java.time.LocalDateTime

@Entity
@Table(name="audit")
data class Audit (
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    val id: Long?=null,
    val user_id:Long?=null,
    val action: String?=null,
    val status:Boolean?=null,
    val timestamp: LocalDateTime = LocalDateTime.now()
)
{}