
function Article({title, date = 'January 1, 1970', preview, readTime}) {
    // ☕️
    // 🍱
    console.log(readTime/5)

    function minCalc() {
        let emoji = "";
        let i=0
        let ii=30
        if (readTime < 30) {
            while(i < (readTime / 5)) {
                emoji = emoji + "☕️"
                i++
            }  
            return emoji
        }
        else {
            emoji = emoji + ""
                while (ii < readTime){
                    ii+=10
                    emoji = emoji + "🍱"
                }
            return emoji
        }
    }
    return (
        <>
        <article>
            <h3>{title}</h3>
            <small>{date + ' | ' + minCalc() + readTime + " min read"}</small>
            <p>{preview}</p>
        </article>
        </>
    )
}

export default Article