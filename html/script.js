let time = 0;
let id = 0;

function anim(id, duration) {
    $(`#${id}`).animate({"margin-right": "0vh"}, {duration: 750}, setTimeout(() => {
        $(`#${id}`).animate({"margin-right": "-50vh"}, {duration: 750}, setTimeout(() => {
            $(`#${id}`).remove();
        }, 850));
    }, duration));
    return "";
}

const reversedNum = num => parseFloat(num.toString().split('').reverse().join('')) * Math.sign(num)
function reverseNum(num) {return (parseFloat(num.toString().split('').reverse().join('')) * Math.sign(num))}

window.addEventListener('message', function(event) {

    if (event.data.duration == 10000) {
        time = 10;
    }else if (event.data.duration == 20000) {
        time = 20;
    }else {
        time = event.data.duration / (event.data.duration / reversedNum(event.data.duration));
    }

    switch (event.data.type) {
        case "info":
            const nInfo = `
            <div class="notification info" id="${id = id + 1}" onload="${setTimeout(() => {anim(id, event.data.duration)}, 250)}">
        
                <div class="notif">
                    <div class="n-icon">
                        <i id="icon" class="fas fa-bell"></i>
                    </div>
                    <div class="n-text">
                        <div class="n-title">
                            <span id="title">${event.data.title}</span>
                        </div>
                        <div class="n-texts">
                            <span id="text">${event.data.message}</span>
                        </div>
                    </div>
                </div>
        
                <div class="progbar info">
                    <div class="p-line info" style="animation-duration: ${time}s"></div>
                </div>
        
            </div>
            `;
            $('body').append(nInfo);
            break;
        case "warning":
            const wInfo = `
            <div class="notification warning" id="${id = id + 1}" onload="${setTimeout(() => {anim(id, event.data.duration)}, 250)}">
        
                <div class="notif">
                    <div class="n-icon">
                        <i id="icon" class="fas fa-exclamation-triangle"></i>
                    </div>
                    <div class="n-text">
                        <div class="n-title">
                            <span id="title">${event.data.title}</span>
                        </div>
                        <div class="n-texts">
                            <span id="text">${event.data.message}</span>
                        </div>
                    </div>
                </div>
        
                <div class="progbar warning">
                    <div class="p-line warning" style="animation-duration: ${time}s"></div>
                </div>
        
            </div>
            `;
            $('body').append(wInfo);
            break;
        case "success":
            const sInfo = `
            <div class="notification success" id="${id = id + 1}" onload="${setTimeout(() => {anim(id, event.data.duration)}, 250)}">
        
                <div class="notif">
                    <div class="n-icon">
                        <i id="icon" class="fas fa-check-circle"></i>
                    </div>
                    <div class="n-text">
                        <div class="n-title">
                            <span id="title">${event.data.title}</span>
                        </div>
                        <div class="n-texts">
                            <span id="text">${event.data.message}</span>
                        </div>
                    </div>
                </div>
        
                <div class="progbar success">
                    <div class="p-line success" style="animation-duration: ${time}s"></div>
                </div>
        
            </div>
            `;
            $('body').append(sInfo);
            break;
        case "error":
            const eInfo = `
            <div class="notification error" id="${id = id + 1}" onload="${setTimeout(() => {anim(id, event.data.duration)}, 250)}">
        
                <div class="notif">
                    <div class="n-icon">
                        <i id="icon" class="fas fa-times-circle"></i>
                    </div>
                    <div class="n-text">
                        <div class="n-title">
                            <span id="title">${event.data.title}</span>
                        </div>
                        <div class="n-texts">
                            <span id="text">${event.data.message}</span>
                        </div>
                    </div>
                </div>
        
                <div class="progbar error">
                    <div class="p-line error" style="animation-duration: ${time}s"></div>
                </div>
        
            </div>
            `;
            $('body').append(eInfo);
            break;
        default: break;
    }
});