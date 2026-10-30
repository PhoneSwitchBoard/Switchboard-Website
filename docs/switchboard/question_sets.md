---
title: Answers and Question Sets
permalink: /docs/switchboard/question_sets
layout: docs
---

## Answers and question sets

*Available from SwitchBoard 1.21.0.*

A **question set** is a list of things you want captured from a call, such as the caller's account number, whether they asked for a callback, or the number to call them back on. When a call through a queue or AI agent with a question set is transcribed, SwitchBoard fills in the **answers** and shows them on the call record.

One set can be shared by several queues and AI agents, so changing it once updates all of them.

> Answers are switched on per phone system and need call recording and transcription. If you don't see **Question sets** under **Settings > AI**, ask your SwitchBoard contact to enable it.

### Before you start

1. Recording and automatic transcription are set up.
2. Under **Settings > AI > AI Providers**, an engine is chosen for **Extract answers** (OpenAI, Anthropic or Amazon Bedrock).
3. On the same page, the automatic processing option to extract answers on every call that has a question set is switched on.

### Create a question set

1. Go to **Settings > AI > Question sets** and click **New question set**.
2. Give it a **Name** (and optionally a **Description** to tell sets apart).
3. Add the **Questions**. For each one:
   - **Label**: what people see, for example *Account number*.
   - **Key**: how the answer is stored and passed on, in lower case letters, digits and underscores, for example `account_number`.
   - **Type**: text, yes/no, phone or number.
   - **Required**: whether a call is complete without it.
   - **What to capture**: tells the AI what to record, for example *The account number the caller gives. Leave it empty if they do not say it.*
4. Click **Save question set**.

<!-- screenshot: images/docs/question_sets/edit.png, a question set with three questions -->

### Use it on a queue or an AI agent

- **Queue:** **Settings > Phone System > Queues**, edit the queue, **Extended Settings**, choose the **Question set**.
- **AI agent:** on the agent's page, choose its **Question set**, or create a new one for it.

**Used by** on the question set's page lists every queue and AI agent using it. Saving a set changes the questions everywhere it is used. A set that is in use cannot be deleted; first choose another set for each queue and AI agent using it.

### Read the answers

Open the call from **Calls > Call Records**. The **Answers** tab shows each answer, which questions were required, and whether the call is **Complete**. A call answered by an AI agent may show answers collected by the agent's provider.

You can also extract answers by hand: on a transcribed call, choose a question set and click **Extract answers**.

<!-- screenshot: images/docs/question_sets/call_answers.png, the Answers tab on a call record -->

Editing a question set does not rewrite earlier answers: each call keeps the questions as they were asked.
