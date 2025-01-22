package upswing.one.demo.Repository

import org.springframework.data.jpa.repository.JpaRepository
import upswing.one.demo.Model.Audit

interface AuditRepo: JpaRepository<Audit,Long> {
}