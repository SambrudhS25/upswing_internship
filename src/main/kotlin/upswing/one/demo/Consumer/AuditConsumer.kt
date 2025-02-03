package upswing.one.demo.Consumer

import org.apache.pulsar.client.api.Consumer
import org.apache.pulsar.client.api.Messages
import org.apache.pulsar.client.api.SubscriptionType
import org.slf4j.Logger
import org.slf4j.LoggerFactory
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.messaging.Message
import org.springframework.pulsar.annotation.PulsarListener
import org.springframework.stereotype.Service
import upswing.one.demo.Exception.BadRequestException
import upswing.one.demo.Model.Audit
import upswing.one.demo.Repository.AuditRepo
import upswing.one.demo.Service.UserService


@Service
data class AuditConsumer(@Autowired val auditRepo: AuditRepo) {

    private val logger: Logger = LoggerFactory.getLogger(UserService::class.java)
    @PulsarListener(
        topics=["Audit-Topic"],
        subscriptionName = "mySubscription",
        subscriptionType = [SubscriptionType.Shared]
    )
    fun consumeMessage(audit: Audit){
//        if (audit.status==false) {
//            logger.warn("Message processing failed for: $audit")
//            throw RuntimeException("Simulated failure for message: ${audit.id}")
        //}
    
        try {
            auditRepo.save(audit)
            logger.info("Message successfully processed and saved: $audit")
        }catch (e:Exception){
            throw Exception("Failed to save")
        }

    }
}