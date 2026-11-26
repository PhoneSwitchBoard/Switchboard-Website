---
title: "Call Quality"
---

*Available from SwitchBoard 1.23.0.*

**Call Quality** shows how well each agent's connection carried their calls. When callers say an agent keeps breaking up, it tells you whether the problem is that agent's network, such as weak Wi-Fi or a busy mobile connection, and how often it happens.

For every answered call on an agent's own phone (the web phone, a desk phone or a softphone app), SwitchBoard saves how much audio was lost in each direction, the jitter and the round trip time, and rates the call as good, fair or poor.

:::note
Call Quality is available on request. If you don't see **Call Quality** under **Settings > Live Operations**, contact support to have it turned on. Only administrators can see it.
:::

## See how each agent's calls sound

Go to **Settings > Live Operations > Call Quality**. You can also find it on **All Settings**, or by typing *quality* or *choppy* in the page search (**Ctrl+K**).

The page has one line per agent, with:

- **Calls rated**: answered calls long enough to rate.
- **Fair** and **Poor**: how many of those calls were rated fair or poor, and what share of the agent's calls that is.
- **Average audio lost** and **Worst call**: the share of audio lost, on average and on the agent's worst call.

Choose **Last 24 hours**, **Last 7 days** or **Last 30 days** to change the period.

![The Call Quality page with one line per agent for the last 30 days](/images/docs/call_quality/summary.png)

## How calls are rated

Each call is rated from the worse of its two directions:

| Rating | Audio lost in either direction | Jitter | Round trip |
|---|---|---|---|
| **Good** | under 1% | under 30 ms | under 300 ms |
| **Fair** | 1% or more | 30 ms or more | 300 ms or more |
| **Poor** | 3% or more | 60 ms or more | 500 ms or more |

One measurement over its limit is enough: a call with 4% of the audio lost is poor even when its jitter and round trip are fine. The same limits are shown under each table.

Calls shorter than about 5 seconds are listed as **Too short** and not rated, because there isn't enough audio to measure.

## Look at one agent's calls

Click an agent's name to see their calls, newest first, 50 per page. Each call shows:

- **Connection**: Good, Fair, Poor or Too short.
- **Lost from agent**: audio from the agent that didn't reach SwitchBoard. This is what callers hear as the agent breaking up.
- **Lost to agent**: audio on its way to the agent that didn't arrive. This is what the agent hears as the caller breaking up.
- **Jitter**: how unevenly the audio arrived.
- **Round trip**: how long audio took to travel to the agent's phone and back.
- **Network address**: the internet address the agent's phone connected from. It helps tell an office connection from a home or mobile one.

![An agent's calls with the rating and measurements of each one](/images/docs/call_quality/agent_calls.png)

## Check the quality of one call

From **Calls > Call Records**, open the menu next to a call's **View** button and choose **Call quality**.

![The Call quality option in a call record's menu](/images/docs/call_quality/call_record_menu.png)

The page lists each agent phone that took part in the call, with the same measurements as above. A call with no measurements, for example one that was never answered by an agent's own phone, shows an empty page.

![The call quality of one call, with one agent rated poor](/images/docs/call_quality/one_call.png)

## What is not measured

- **Agents answering on a mobile through a remote extension.** That call travels over the phone network, not the agent's own internet connection, so it isn't rated.
- **Calls nobody answered.** Ringing phones are not measured.
- **The connection between SwitchBoard and your phone provider.** Only the agent's side of the call is measured.

## How long measurements are kept

Measurements are kept for 90 days and then deleted automatically. They stay inside your SwitchBoard instance and are not sent to any other service.
