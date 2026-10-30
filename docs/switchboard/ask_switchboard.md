---
title: Ask SwitchBoard
permalink: /docs/switchboard/ask_switchboard
layout: docs
---

## Ask SwitchBoard

*Available from SwitchBoard 1.21.0.*

Ask SwitchBoard answers questions about your calls, voicemails, messages and contacts, in your own words. For example:

- *Who called today?*
- *How many calls did we miss yesterday, by agent?*
- *Which callers were unhappy this week?*
- *Summarize today's voicemails*

It looks up the records it needs, answers, and lists the calls, voicemails, conversations and contacts it relied on, so you can check them.

Ask SwitchBoard **only reads**. It cannot change, delete or send anything, and it only reads records the person asking can already see.

> Ask SwitchBoard is switched on per phone system. If you don't see it, ask your SwitchBoard contact to enable it, then an administrator turns it on as described below.

### Asking a question

1. Click **Ask SwitchBoard** at the bottom of the left menu. A panel opens beside the page you are on.
2. Type your question, or pick one of the suggestions, and press **Enter**.
3. While it works, you see the steps it is taking. Then you get the answer, with numbered sources.
4. Click a source to open it: a call shows its details, a voicemail plays in the panel, and a contact opens.

Press **+** to start a new conversation, and **Esc** to close the panel.

<!-- screenshot: images/docs/ask_switchboard/panel.png, an answer with its sources -->

Your earlier questions are under **Assistant history** in your account menu, where you can ask any of them again.

### Setting it up (administrators)

Go to **Settings > AI > AI Assistant**.

1. **AI engine.** Choose the engine and model that answer. Only engines that can look up records are offered. You add engines under **Settings > AI > AI Providers**: OpenAI, Anthropic, or a server of your own that speaks the OpenAI API (for example Ollama). Click **Test**: *Works. Answered in N s and looked up a record.* means it is ready.
2. **Turn on Ask SwitchBoard.**
3. **Who can use it:**
   - **Administrators and allowed agents**: administrators, plus the agents you choose. Ask your SwitchBoard contact to give those agents access. Good for trying it with a few people first.
   - **Everyone**: every user on the phone system.
4. **What it can read:** call records and summaries, full call transcripts, text and WhatsApp messages, voicemails, and contacts. Turning one off hides it from the assistant only; it does not change what people can see elsewhere.
5. **Answers:** **Short** (a sentence or two, or a short list) or **Detailed**.
6. **Instructions for the assistant** (optional): anything it should know about your business, such as your queue names or opening hours.
7. **Suggested questions** shown in the panel.
8. **Limits and history:** questions per person per day (every question costs money at your AI engine's vendor), and **Keep activity for**: how many days activity is kept.

<!-- screenshot: images/docs/ask_switchboard/settings.png, the AI Assistant page -->

**Privacy.** Each question, and the records the assistant reads to answer it, are sent to the vendor of the engine you choose. Nothing is sent until someone asks a question. With an engine on your own server, questions and records stay on your network.

### Activity

Administrators see every question under **AI Assistant > Activity**: who asked, when, what the assistant looked at, and how long it took. Activity older than the period you set is deleted automatically each night.
