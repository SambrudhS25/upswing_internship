package upswing.one.demo.Consumer

import org.apache.pulsar.client.api.SubscriptionType
import org.slf4j.Logger
import org.slf4j.LoggerFactory
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.pulsar.annotation.PulsarListener
import org.springframework.stereotype.Service
import upswing.one.demo.Repository.AuditRepo
import upswing.one.demo.Service.UserService


@Service
data class AuditConsumer(@Autowired val auditRepo: AuditRepo) {

    private val logger: Logger = LoggerFactory.getLogger(UserService::class.java)

    @PulsarListener(
        topics=["Audit-Topic"],
        subscriptionName = "mySubscription",
        subscriptionType = arrayOf(SubscriptionType.Shared)
    )
    fun consumeMessage(msg:String){

        logger.info("consumer has consumed message")
    }
}