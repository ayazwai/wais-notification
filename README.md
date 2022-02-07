# wais-notification
Modern Fivem notification script.

Server Event:
TriggerClientEvent('wais:sendNotif', source, type, title, message, duration)


Client Event:
TriggerEvent('wais:sendNotif', type, title, message, duration)

Type -> info, warning, success, error

type string
title string
message string
duration integer

Example:
TriggerClientEvent('wais:sendNotif', source, "info", "Title", "Hello ı am a notification message", 5000)

Contact Discord: Ayazwai#3900
