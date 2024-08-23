

document.getElementById('giftBox').addEventListener('click', function() {
    const lid = document.getElementById('giftLid');
    lid.style.transform = 'rotateX(90deg)';

    const surpriseMessage = document.getElementById('surpriseMessage');
    setTimeout(() => {
        surpriseMessage.style.display = 'block';
    }, 500);
});
