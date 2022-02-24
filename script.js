function ans() {
    return Math.floor(Math.random() * 10) + 1;
}
let count = 0;
const input = document.querySelector(".input")
function roll() {
    ++count;
    const value = input.value;

    if (Number(value) > 10 || Number(value) < 1) {
        Swal.fire({
            icon: 'error',
            title: 'Mời bạn nhập 1 số từ 1 đến 10',
        })
    }
    else {
        if (Number(value) == ans()) {
            count = 0;
            Swal.fire({
                icon: 'success',
                title: 'Bạn đã chiến thắng',
                text:'Con số may mắn là' + ans() +'',
            })
        }
        else {
            Swal.fire({
                icon: 'error',
                title: 'Con số chính xác là ' + ans() + '',
            })
            if (count == 3) {
                Swal.fire({
                    icon: 'error',
                    title: 'Bạn đã thua',
                    text: 'Con số chính xác là ' + ans() + '',
                })
            }
        }
    }
}
