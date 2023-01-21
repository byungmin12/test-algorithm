function solution(noti_time, do_not_disturbs) {    //h HH:MM~HH:MM    //24시간 표기법    // 시작~끝    //최소 1분 최대 23시간 59분    //여러개 설정 가능 , 서로 겹치는 것 가능    //알람이 실제 보내지는 시간    const changeTimeToSec = (time) => {        const [hour,minute] = time.split(":")        return Number(hour) * 3600 + Number(minute)*60    }    const plusHour = (end) => {        const [hh,mm] = end.split(":")        const newEndHour = Number(hh)+24        return changeTimeToSec(`${newEndHour}:${mm}`)    }    let scope = [[0,""],[0,""]]    do_not_disturbs.forEach((disturbTime)=>{        const [start,end] = disturbTime.split("~")        //start보다 end가 작으면 24을 더해줘야함        const startSec = changeTimeToSec(start)        let endSec = changeTimeToSec(end)        if(startSec > endSec){            endSec = plusHour(end)        }        if(scope[0][0]===0 && scope[1][0]===0){            scope = [[startSec,start], [endSec,end]]        }else{            if(scope[0][0]> startSec){                scope[0] = [startSec,start]            }            if(scope[1][0]<endSec){                scope[1] = [endSec,end]            }        }    })    const notiTimeToSec = changeTimeToSec(noti_time)    if(scope[1][0] - scope[0][0] >= 86400){        return "impossible"    }    if(scope[0][0] > notiTimeToSec ){        return noti_time    }    if(  scope[0][0] <= notiTimeToSec && notiTimeToSec<= scope[1][0]){        return scope[1][1]    }}//// 테스트 1// 입력값 〉// "23:00", ["22:30~23:40", "23:05~00:45"]// 기댓값 〉// "00:45"// 실행 결과 〉// 실행한 결괏값 [85200,"23:40"]이 기댓값 "00:45"과 다릅니다.//     테스트 2// 입력값 〉// "09:55", ["09:55~13:25", "13:25~14:01"]// 기댓값 〉// "14:01"