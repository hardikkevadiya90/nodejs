var mydatetime={
    getDate : function(){
        let d = new Date();
        let day = d.getDate();
        let month = d.getMonth() +1 ;
        let year = d.getFullYear();
        let fulldate = day + '/'+month+'/'+year
        return fulldate;
    },
    getTime : function(){
        let d = new Date();
        let hour = d.getHours();
        let minute = d.getMinutes();
        let second = d.getSeconds();
        let fulltime = hour + ':'+ minute + ':'+ second;
        return fulltime;
    },
    getDateTime : function(){
        let d = this.getDate();
        let t = this.getTime();
        let datetime= d + '&'+ t;
        return datetime;

    }
}
module.exports = mydatetime;