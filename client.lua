ESX = nil

Citizen.CreateThread(function()
	while ESX == nil do
		TriggerEvent('esx:getSharedObject', function(obj) ESX = obj end)
		Citizen.Wait(0)
	end
end)

RegisterNetEvent('wais:sendNotif')
AddEventHandler('wais:sendNotif', function(type, title, message, duration)
    if not (type == "info" or type == "warning" or type == "error" or type == "success") then return end
	if title == "" then return end
	if message == "" then return end
	if tonumber(duration) > 15000 then
		print('15 Saniyeden büyük değer girmeyiniz')
		return
	end

	SetNuiFocus(false, false)
	SendNUIMessage({
		type = type,
		title = title,
		message = message,
		duration = duration
	})
end)