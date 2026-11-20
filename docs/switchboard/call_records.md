---
title: Call Records
permalink: /docs/switchboard/call_records
layout: docs
---

## Call recording


To access your Call Records, go to `Calls` -> `Call Records` in the left menu.


![Screenshot: Call Records](./../../images/docs/call_records/call_record.png)


To easily locate a Call Record, use the filters on the page. You can also share the current URL with a colleague at your company, it will include your search without losing the filters.

Note the column on the right that will let you know if a Call Record is still pending to be filled with comments about the call.

## Pending Call Records

To more easily locate pending Call Records (that belong to you as an Agent), you can view the list on the dashboard. To complete a call log, press the `View` button.


![Screenshot: Pending Call Records](./../../images/docs/call_records/pending_call_record.png)

## Fill a Call Record

Once you have finished a call, you can fill out the call details. We recommend that you do it as soon as the call ends, this way you will have fresh all the important details you want to keep about the conversation you just had. This will allow your company to locate calls, and keep in mind that you can search for them years later. That is the importance of filling out call records.

By filling out a Call Record you will have the recording of the call available for reference.


![Screenshot: Fill a Call Record](./../../images/docs/call_records/fill_call_record.png)


You will receive an email every time you fill out a Call Record, with all the feedback details included in the comments. This way, if you ever want to search for a conversation by topic, we recommend searching using your email client's filters.

## Calls forwarded to an external number

*Available from SwitchBoard 1.22.0.*

A call that SwitchBoard sent to an [external number](./../../docs/switchboard/external_numbers), such as an answering service or a manager's mobile, is marked in the Call Records list:

- the **Dir.** column shows a forward arrow instead of the inbound arrow. Hover over it to see *Inbound, forwarded to* and the number;
- the **Agent** column shows the external number's name and phone number.

<p align="center">
  <img src="./../../images/docs/call_records/call_records_forwarded.png" />
</p>

When you open the call with `View`, the **Call Notes** window shows where it was forwarded.

<p align="center">
  <img src="./../../images/docs/call_records/call_notes_forwarded.png" />
</p>

The CSV export has a **Forwarded To** column with the same information.

A call is marked only once the outside number has taken it. If the number did not answer and the call went on to its **If not reached** destination, the record shows what happened there instead.

When an external number uses **Show the caller's number**, the trunk provider connects the call, so SwitchBoard cannot tell whether the outside number answered, and the call has no recording.
