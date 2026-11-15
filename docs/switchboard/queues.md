---
title: Queues
permalink: /docs/switchboard/queues
layout: docs
---

## Queue configuration


To add yourself to one of the existing queues, go to the **Dashboard**: the `Queues` panel lists your queues first; open `Other queues` and click `+ Join` on the queue you want. (The screenshot below shows the earlier menu.)


<p align="center">
  <img src="./../../images/docs/queues/add_to_queue.png" />
</p>


Additionally, you can add other agents to queues from the `Add to Queue` button, located to the right of the agent name in the agent list.


<p align="center">
  <img src="./../../images/docs/queues/add_agent_to_queue.png" />
</p>


Note that an Agent can be _Paused_ or _Active_ in a queue, and you can manage it from the list of queues in the dashboard.


<p align="center">
  <img src="./../../images/docs/queues/queue.png" />
</p>

## Choose how long callers wait

*Available from SwitchBoard 1.22.0.*

Administrators set up queues under `Settings` -> `Phone System` -> `Queues`. On the queue's **Basic Settings** tab:

- **Ring Timeout** is how long each ring of the queue's agents lasts.
- **Maximum wait (seconds)** is how long a caller waits in the queue before the **Failover Destination** takes the call. The default is 72 seconds.
- **Failover Destination** is where the call goes when nobody in the queue answers in time, for example a voicemail box, another queue or an [external number](./../../docs/switchboard/external_numbers).

The first ring always lasts the full Ring Timeout, even when the maximum wait is shorter. To send callers to the failover destination after about three rings, set both Ring Timeout and Maximum wait to 18.

<p align="center">
  <img src="./../../images/docs/queues/queue_maximum_wait.png" />
</p>

### Send unanswered calls to an outside number

To send calls nobody answers to an outside number, such as an answering service, an AI receptionist or a manager's mobile, first add it as an [external number](./../../docs/switchboard/external_numbers). Then, on the queue, set **Failover Destination** to **External number** and pick it from the list.

## Members who answer on a mobile

*Available from SwitchBoard 1.22.0.*

When a queue rings a member on their mobile, through a remote extension, they hear a short prompt when they pick up and press **1** to accept the call. The call becomes theirs only once they press 1: from then on they show as on a call, and the call record and any transcript are credited to them. If they pick up but don't press 1, and someone else in the queue takes the call, the call is credited to the person who took it.
