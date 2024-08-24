---
title: Interface Configuration
permalink: /docs/switchboard/interface_config
layout: docs
---

## Main configuration variables for your interface


Once you log in to your interface, go to the `Interface Config` menu option.


![Screenshot: Interface Config](./../../images/docs/interface_config/interface_config.png)


You will find a List of _Uninitialized Configuration Properties_, on the left of the page, these are those properties that you must configure, once, so that your phone system is fully  configured and you can take advantage of all the functions of the Phone System.

To set those properties that are not initialized, find the description and an example of each of them below:


<table class="table table-bordered table-striped">
    <tr>
        <th>Category</th>
        <th>Property</th>
        <th>Description</th>
    </tr>
    <tr>
        <td>general</td>
        <td>asterisk_host</td>
        <td>Server name or IP address of the server where Asterisk® is installed. E.g: vagrant.asterisk</td>
    </tr>
    <tr>
        <td>general</td>
        <td>postgres_host</td>
        <td>Server name or IP address of the server where Postgres database is installed. E.g: vagrant.postgres</td>
    </tr>
    <tr>
        <td>general</td>
        <td>postgres_username</td>
        <td>Postgres user, owner or privileged user in your Postgres configuration to log and access the database from the Switchboard Cloud™ interface. E.g: asterisk_role</td>
    </tr>
    <tr>
        <td>general</td>
        <td>postgres_password</td>
        <td>Password of the Postgres user that you chose in postgres_username, to connect and access the database from the Switchboard Cloud™ interface. E.g: 12345678</td>
    </tr>
    <tr>
        <td>general</td>
        <td>postgres_port</td>
        <td>The PostgreSQL database service is available by default on port 5432. But if you have a custom configuration that uses a different connection port, you can specify it here. E.g: 5433</td>
    </tr>
    <tr>
        <td>dialer</td>
        <td>dial_out_trunk</td>
        <td>Here you should put the name of the Trunk created to connect with your favorite communications provider that you hired to make calls (in case you have more than one provider) E.g: twilio-trunk</td>
    </tr>
    <tr>
        <td>dialer</td>
        <td>domestic_cid</td>
        <td>It&#39;s the phone number that others see when you&#39;re calling them (for calls within the US). E.g: 8777368888</td>
    </tr>
    <tr>
        <td>dialer</td>
        <td>international_cid</td>
        <td>International Caller ID, it&#39;s the phone number that others see when you&#39;re calling them, for international calls. E.g: 12173568888</td>
    </tr>
    <tr>
        <td>dialer</td>
        <td>international_dial_out_code</td>
        <td>International dialing code for the United States. E.g: 011</td>
    </tr>
    <tr>
        <td>dialplan</td>
        <td>agent_dest_appdata</td>
        <td>E.g: agents;AGENTID;1</td>
    </tr>
    <tr>
        <td>dialplan</td>
        <td>internal_context</td>
        <td>Name of the context used in the dialplan for incoming calls to agents and also for internal calls between agents. E.g: agents</td>
    </tr>
    <tr>
        <td>dialplan</td>
        <td>primary_trunk</td>
        <td>Here you should put the name of the Trunk created to connect with your favorite communications provider that you hired to receive calls (in case you have more than one provider) E.g: twilio- trunk</td>
    </tr>
    <tr>
        <td>dialplan</td>
        <td>queue_dest_appdata</td>
        <td>E.g: queues;QUEUENAME;1</td>
    </tr>
    <tr>
        <td>dialplan</td>
        <td>trunk_context</td>
        <td>Name of the context used in the dialplan to handle incoming calls. E.g: from-peer</td>
    </tr>
    <tr>
        <td>manager</td>
        <td>password</td>
        <td>Password that we use to connect to the Asterisk® Management Interface (AMI). This password is stored in the asterisk_config DB table, you can filter by filename=&#39;manager.conf&#39;. E.g: password</td>
    </tr>
    <tr>
        <td>manager</td>
        <td>username</td>
        <td>Username that we use to connect to the Asterisk® Management Interface (AMI). This username is stored in the asterisk_config DB table, you can filter by filename=’manager.conf’. E.g: switchboard</td>
    </tr>
    <tr>
        <td>call_record</td>
        <td>ignore_list</td>
        <td>Callee number that you want us to ignore in the Call Records list if you call him. E.g: 2171110000</td>
    </tr>
    <tr>
        <td>contacts</td>
        <td>primary_host</td>
        <td>Name or IP of the server where the Postgres database that contains the contact data is located. E.g: vagrant.postgres</td>
    </tr>
    <tr>
        <td>contacts</td>
        <td>secondary_host</td>
        <td>Name or IP of the backup server where the Postgres database that contains the contact data is located. This value is optional. E.g: vagrant.contacts_backup</td>
    </tr>
    <tr>
        <td>mail</td>
        <td>call_record_report_receipients</td>
        <td>Every time you fill out a Call Record, a notification email is sent to a list of people interested in monitoring this information. Those people&#39;s email addresses should be in this list, separated by semicolons. E.g: email@domain.com; email2@domain.com</td>
    </tr>
    <tr>
        <td>mail</td>
        <td>call_record_summary_recipients</td>
        <td>Once a week, a report is sent via email to inform how many Call Records (for the current week) are pending to be filled out by each agent. In this list you&#39;ll have the email addresses of the people who receive this report, separated by semicolons. E.g: email@domain.com; email2@domain.com</td>
    </tr>
    <tr>
        <td>mail</td>
        <td>from_address</td>
        <td>Email address from which Switchboard Cloud™ sends emails. E.g: email@domain.com</td>
    </tr>
    <tr>
        <td>mail</td>
        <td>outbound_mail_host</td>
        <td>Email server from which you send emails. E.g: mail.domain.com</td>
    </tr>
    <tr>
        <td>recording</td>
        <td>base_directory</td>
        <td>File directory where audio files for every call are automatically saved, regardless of which agent made or received it. E.g: /nfs-mounts/asterisk/recording</td>
    </tr>
    <tr>
        <td>voicemail</td>
        <td>base_directory</td>
        <td>File directory where the audio files of received voicemails are saved. Asterisk® works with the INBOX, Old and Deleted folders within a folder for each agent, which will be the Agent ID. E.g: /nsf-mounts/asterisk/voicemail/101/INBOX</td>
    </tr>
    <tr>
        <td>voicemail</td>
        <td>display_folders</td>
        <td>Voicemail audio files, included in these folders, which will be displayed in an agent&#39;s Dashboard. E.g: INBOX;Old</td>
    </tr>
    <tr>
        <td>voicemail</td>
        <td>folders</td>
        <td>The folders that Asterisk® needs in its file directory to save and manage voicemail audio files for each Agent. E.g: INBOX;Old;DELETED</td>
    </tr>
</table>
