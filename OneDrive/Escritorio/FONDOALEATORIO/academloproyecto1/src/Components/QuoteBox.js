const QuoteBox  = ({ text }) => {
    return(
        <div className='QuoteBox'>
                <blockquote>
                <p className='quote'>{text.quote}</p>
                <p className='quote'><i>{text.author}</i></p>
                </blockquote>
        </div>
    )
}

export default QuoteBox;