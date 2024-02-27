import { EXCHANGE_NAME, MESSAGE_BROKER_URL } from "@/config";
import amqp from "amqplib";

class QueueService {
  private conn: amqp.Connection | null;

  constructor() {
    this.conn = null;
  }

  private createChannel = async (conn: amqp.Connection) => {
    try {
      const channel = await conn.createChannel();
      await channel.assertExchange(EXCHANGE_NAME, "direct", { durable: true });

      return channel;
    } catch (error) {
      throw error;
    }
  };

  private getChannel = async () => {
    try {
      if (this.conn === null) {
        this.conn = await amqp.connect(MESSAGE_BROKER_URL);
        return this.createChannel(this.conn);
      } else {
        return this.createChannel(this.conn);
      }
    } catch (error) {
      throw error;
    }
  };

  publishMessage = async (routingKey: string, data: any) => {
    try {
      const channel = await this.getChannel();

      channel.publish(
        EXCHANGE_NAME,
        routingKey,
        Buffer.from(JSON.stringify(data)),
      );
    } catch (error) {
      throw error;
    }
  };

  subscribeMessage = async (routingKey: string, queueName: string) => {
    try {
      const channel = await this.getChannel();
      const appQueue = await channel.assertQueue(queueName);
      await channel.bindQueue(appQueue.queue, EXCHANGE_NAME, routingKey);

      channel.consume(appQueue.queue, (data) => {
        if (data?.content) {
          const payload = JSON.parse(data.content.toString());
          console.log(payload);
          channel.ack(data);
        }
      });
    } catch (error) {
      throw error;
    }
  };
}

export default QueueService;
