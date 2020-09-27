/* Word Clock written in German */

/* Magic Mirror
 * Module: German Word Clock
 *
 * Fork from alexBeuth https://github.com/alexBeuth/MMM-germanwordclock
 * Original bern dialect version by Sebastian Plattner https://www.sebastianplattner.ch
 * MIT Licensed.
 */

Module.register('MMM-germanwordclock', {
    defaults: {
        updateInterval: 1000,
        bold: true,
        italic: false,
        fontFamily: 'Courier',
        fontSize: '.5rem',
        letterSpacing: '1rem',
        lineHeight: '1rem',
        color: 'rgba(255,255,255,0.2)',
        selectedColor: 'rgba(255,255,255,1)'
    },

    getScripts() {
        return ['moment.js']
    },

    start() {
        moment.locale(config.language)
        this.elements = ['hour1', 'hour2', 'hour3', 'hour4', 'hour5', 'hour6', 'hour7', 'hour8', 'hour9', 'hour10', 'hour11', 'hour12', 'before', 'past', 'full', 'five', 'ten', 'quarter', 'twenty', 'half', 'it', 'is', 'einS']

        let self = this
        setInterval(() => self.updateWordClock(), this.config.updateInterval)
        this.updateWordClock()
    },

    updateWordClock() {
        const elements = ['it', 'is']

        const minute = moment().minute()
        const hour = (minute < 30 ? moment().hour() : moment().hour() + 1) % 12

        if (minute < 5)
            elements.push('full')
        else if (minute < 10)
            elements.push('five', 'past')
        else if (minute < 15)
            elements.push('ten', 'past')
        else if (minute < 20)
            elements.push('quarter', 'past')
        else if (minute < 25)
            elements.push('twenty', 'past')
        else if (minute < 30)
            elements.push('five', 'before', 'half')
        else if (minute < 35)
            elements.push('half')
        else if (minute < 40)
            elements.push('five', 'past', 'half')
        else if (minute < 45)
            elements.push('twenty', 'before')
        else if (minute < 50)
            elements.push('quarter', 'before')
        else if (minute < 55)
            elements.push('ten', 'before')
        else
            elements.push('five', 'before')
        
        if (minute >= 4 && hour == 1)
            elements.push('einS')

        elements.push(hour == 0 ? 'hour12' : `hour${hour}`)

        for (let el of this.elements)
            document.getElementById(el).style.color = elements.includes(el) ? this.config.selectedColor : null
    },
    
    getDom() {
        const wrapper = document.createElement('div')
        wrapper.style.color = this.config.color
        wrapper.style.fontSize = this.config.fontSize
        wrapper.style.fontWeight = this.config.bold ? 'bold' : 'normal'
        wrapper.style.fontStyle = this.config.italic ? 'italic' : 'normal'
        wrapper.style.fontFamily = this.config.fontFamily
        wrapper.style.letterSpacing = this.config.letterSpacing
        wrapper.style.lineHeight = this.config.lineHeight
        wrapper.innerHTML = '&nbsp;<span id="it">ES</span>K<span id="is">IST</span>A<span id="five">KURZ</span>&nbsp;<br>' +
                            '&nbsp;<span id="ten">ZEHN</span><span id="quarter">VIERTEL</span>&nbsp;<br>' +
                            '&nbsp;<span id="twenty">ZWANZIG</span>SPÄT&nbsp;<br>' +
                            '&nbsp;<span id="before">VOR</span>NULL<span id="past">NACH</span>&nbsp;<br>' +
                            '&nbsp;<span id="half">HALB</span>TAU<span id="hour1">EIN</span><span id="einS">S</span>&nbsp;<br>' +
                            '&nbsp;<span id="hour4">VIER</span>ST<span id="hour12">ZWÖLF</span>&nbsp;<br>' +
                            '&nbsp;<span id="hour6">SECHS</span><span id="hour7">SIEBEN</span>&nbsp;<br>' +
                            '&nbsp;<span id="hour3">DREI</span><span id="hour5">FÜNF</span><span id="hour11">ELF</span>&nbsp;<br>' +
                            '&nbsp;<span id="hour9">NEUN</span>PI<span id="hour2">ZWEI</span>N&nbsp;<br>' +
                            '&nbsp;<span id="hour8">ACHT</span><span id="hour10">ZEHN</span><span id="full">UHR</span>&nbsp;<br>'
        return wrapper
    }
})
