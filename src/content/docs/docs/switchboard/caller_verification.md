---
title: Caller Verification
---

*Available from SwitchBoard 1.20.0.*

**Caller Verification** recognises callers from their phone number and, for contacts that need it, asks for a support PIN before the call goes on. A verified caller can go straight to their team, while everyone else goes somewhere else, such as the general queue. Agents see on the call how the caller was verified.

:::note
Caller Verification is switched on per phone system. If you don't see **Caller Verification** under **Settings > Phone System**, contact support to have it turned on.

Menu names on this page are those of SwitchBoard 1.21.0 and later. In 1.20.0 the configuration pages are in the **Admin** menu: Caller Verification is under **Admin > Routing**.
:::

## How a caller is verified

When a call reaches a Caller Verification step, SwitchBoard looks up the caller's number in your **Contacts**:

- **One contact has the number and doesn't require a PIN:** the caller is identified straight away.
- **The contact requires a PIN:** the caller hears the PIN prompt and types their PIN. A caller whose PIN is shorter than the PIN length presses **#** to finish.
- **Several contacts share the number:** the caller is asked for a PIN, and becomes the contact whose PIN they enter. Only contacts with a PIN can be identified this way.
- **No contact has the number:** the caller is not identified, unless you let callers enter a registered number (see [Callers phoning from another number](#callers-phoning-from-another-number)).

The call then goes to the step's **When Identified** or **When Not Identified** destination.

The caller is also not identified, without being asked for a PIN, when the contact requires a PIN but has none set, when several contacts share the number and none of them has a PIN, when more contacts share the number than the step allows, or when the number has had too many wrong PINs in the last 24 hours.

## Give a contact a PIN

Administrators and agents set PINs on the contact itself:

1. Open the contact from **Contacts** (or the **Contact** tab of a call record) and choose **Advanced**.
2. Under **Caller Verification**, enter a **PIN** of 3 to 8 digits and click **Set PIN**.
3. Turn on **Require PIN** if this contact must always enter it. With it off, a matching phone number is enough, and the PIN is only asked for when several contacts share the number.

These settings are saved straight away, separately from the contact's **Save** button. A PIN is never shown again once set: use **Change PIN** or **Remove PIN**.

Contacts that come from another system, such as Clio or QuickBooks, can still have a PIN set here, even though the rest of the contact can't be edited in SwitchBoard. Some sources manage the PIN themselves; their contacts say the PIN can only be changed at the source.

## Create a Caller Verification step

Go to **Settings > Phone System > Caller Verification** and click **New Caller Verification**.

### Basic Information

- **Name**: shown when you choose this step as a destination.
- **Description**: optional.

### PIN Entry

These prompts are used only for contacts that require a PIN, and when several contacts share the caller's number. Each prompt is one of your audio files from **Settings > Audio > Audio Files**; leave it on the default to use SwitchBoard's own.

- **PIN Prompt**: asks for the PIN.
- **Shared Number PIN Prompt** (1.22.0): used instead when several contacts share the number.
- **Invalid PIN Prompt**: plays after a wrong PIN. The caller can start typing again straight away.
- **Repeat the PIN Prompt after a wrong PIN** (1.22.0): plays the PIN prompt again after the invalid-PIN prompt, for menus designed that way. Without an invalid-PIN prompt of your own, the PIN prompt always plays again.
- **Final Failure Prompt** (1.22.0): plays once when the attempts run out, instead of the invalid-PIN prompt.
- **PIN Length**: 3 to 8 digits.
- **Attempts**: wrong PINs allowed before the call goes to **When Not Identified**.
- **Failed PINs per Day**: how many wrong PINs a number may have in 24 hours before it is no longer asked. From 1.22.0 it can be left empty for no limit. A correct PIN resets the count for numbers found by caller ID.
- **Contacts per Number**: the most contacts that may share one number. Above that, the caller is not asked for a PIN.

### When Identified and When Not Identified

Choose where each kind of call goes: an agent, a queue, an IVR, a voicemail box, an announcement, a call flow control, a time condition, another Caller Verification step, or an AI agent (when AI agents are switched on). Choose **Hang Up** to end the call.

Save the step. Its page lists each possible outcome and where it sends the call.

## Callers phoning from another number

A customer may call from a mobile or a home phone that isn't on their contact. Turn on **Let callers enter a registered number** to let them enter the number that is on their contact, followed by their PIN. Then fill in:

- **Question Before Number Entry** (1.22.0): an optional question first, such as *If you are a registered customer, press 1*. Any other key goes to **When Not Identified**.
- **Number Prompt**: asks for the registered number. Required, because SwitchBoard has no default for it.
- **Entered Number PIN Prompt** (1.22.0): asks for the PIN on this path. It defaults to the PIN prompt.
- **Country**: entered numbers are read as numbers in this country, unless the caller also enters a country code.

Callers enter the number, press **#**, then enter their PIN. The PIN is always required on this path, so contacts without a PIN can't be verified this way. A wrong number and a wrong PIN get the same answer, so callers can't find out which numbers are registered. Wrong attempts from the calling phone count towards **Failed PINs per Day**; when that is left empty, a phone still gets at most 10 wrong attempts in 24 hours on this path. A correct entry doesn't reset this count: failures expire 24 hours after they happen.

## Leave verification by pressing 0

*Available from SwitchBoard 1.22.0.*

Pressing **0** on its own at the question, number or PIN prompt leaves verification, and the call goes to **When Not Identified**. This takes a few seconds, or up to 10 seconds at the number prompt in countries where phone numbers start with 0, such as the UK. A PIN or number that starts with 0 still works.

## Send calls to the step

Choose **Caller Verification** as the destination of:

- an option or the fallback of a **Dialplan (lightweight)** IVR;
- an [inbound route](/docs/switchboard/inbound_routes/);
- a call flow control, a time condition or an announcement;
- another Caller Verification step's outcome.

## What agents see

A badge after the caller's name on the dashboard, in the queue panel and in the parking lot shows how the caller was verified. Hover over it to read **Verified by PIN**, **Identified by Caller ID** or **Verified by PIN, calling from another number**. Calls that weren't verified have no badge.

Agents' phones show the contact's name, and the call record is linked to the contact. When a queue [emails the team](/docs/switchboard/queues/#email-the-team-when-a-call-enters-a-queue) about a call, the email says whether the caller was verified.

From 1.22.0, an inbound route can also show the contact's name on phones without asking for anything: see **Show contact name on phones** on [Inbound Routes](/docs/switchboard/inbound_routes/).

## Delete a step

Open the step and click **Delete**. SwitchBoard doesn't stop you deleting a step that calls are still sent to, so first change every IVR option, route or other setting that points at it.
