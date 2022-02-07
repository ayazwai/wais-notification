RegisterNetEvent('wais:sendNotif')
AddEventHandler('wais:sendNotif', function(type, title, message, duration)
    if not (type == "info" or type == "warning" or type == "error" or type == "success") then return end
	if title == "" then return end
	if message == "" then return end
	if tonumber(duration) > 20000 then
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
