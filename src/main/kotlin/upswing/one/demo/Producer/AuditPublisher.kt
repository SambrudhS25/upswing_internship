package upswing.one.demo.Producer

import org.slf4j.Logger
import org.slf4j.LoggerFactory
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.pulsar.core.PulsarTemplate
import org.springframework.stereotype.Service
import upswing.one.demo.Model.Audit
import upswing.one.demo.Service.UserService


@Service
class AuditPublisher {

    private val logger: Logger = LoggerFactory.getLogger(UserService::class.java)

    @Autowired
    private val template:PulsarTemplate<Any>?=null

    fun publishMessage(msg:String,audit:Audit){
        template?.send("Audit-Topic",audit)
        logger.info("AuditPublisher published: ${msg}")
    }
}