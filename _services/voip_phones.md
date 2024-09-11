---
title: "VoIP Phones"
date: 2019-05-18T12:33:46+10:00
weight: 7
---

To operate **Switchboard Cloud™** phone system, the first option of terminals to connect, as extensions, should be VoIP phones.

<p align="center">
  <img src="./../../images/services/Yealink-t42u.png" />
</p>


## Learn How to Set Up your VoIP Phone


Connect your VoIP phone to your local network (or your router). We recommend working with [**Yealink TX Series Phones**](https://www.yealink.com/en/product-list/ip-phone?filter=t3). More on how to connect your phone [here](https://support-cdn.yealink.com/attachment/upload/attachment/2016-7-8/3/73b4c514-dd7e-4677-a2df-b52d12699bd9/Yealink_SIP-T27G_Quick_Start_Guide_V80_1.pdf).

Once connected, <ins>from the phone</ins> go to `Menu` -> `Status` and check the IPv4 address given to your phone.

Use that IP address to access the phone's configuration page from your browser. Get a detailed guide on how to access this page [here](https://www.3cx.com/sip-phones/manually-configure-yealink-t32g-t38g-t42g-t46g/).

> Go to the Account tab and use the following image as a reference to configure your VoIP phone.


<p align="center">
  <img src="./../../images/docs/phone_config/voip_phone_conf.png" />
</p>


* The `Display Name`, `Register Name` and `User Name` are the extension number, which you previously configured for your agent in the **Switchboard Cloud™** Interface.

* The Password is the one stored in the `ps_auths` DB table, for your extension.

* The Server host is the IP address where your **Asterisk®** service is installed. In this example we use a local IP address, ideal for the case in which your VoIP phone is connected to your company's local network, normally via a wired network connection.


## Set Up a Soft Phone

You can choose between the different brands of Softphones available on the market. More about how to connect a Soft Phone [here](./../../docs/switchboard/phone_config)
