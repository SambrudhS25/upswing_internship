package upswing.one.demo.Repository

import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Repository
import upswing.one.demo.Model.Users

@Repository
interface UserRepo: JpaRepository<Users,Long>{
}