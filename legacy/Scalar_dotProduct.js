//내적
// 길이가 같은 두 1차원 정수 배열 tapeEquilibrium.js, b가 매개변수로 주어집니다. a와 b의 내적을 return 하도록 solution 함수를 완성해주세요.

// 이때, a와 b의 내적은 tapeEquilibrium.js[0]*b[0] + tapeEquilibrium.js[1]*b[1] + ... + tapeEquilibrium.js[n-1]*b[n-1] 입니다. (n은 tapeEquilibrium.js, b의 길이)


// [1,2,3,4]	[-3,-1,0,2]	  결과 3
// a와 b의 내적은 1*(-3) + 2*(-1) + 3*0 + 4*2 = 3 입니다.
// 입출력 예 #2

// [-1,0,1]	[1,0,-1]	 결과 -2
// a와 b의 내적은 (-1)*1 + 0*0 + 1*(-1) = -2 입니다.
function solution(a, b) {
 
    //같은 위치 끼리 곱샘 연산을 한 뒤 덧셈해준다
    let num = []
    for(let i = 0 ; i<a.length ; i++ ){
        num.push(a[i]*b[i])
    }

    return   num.reduce((acc,cur)=>{
                return acc+cur
            })

}