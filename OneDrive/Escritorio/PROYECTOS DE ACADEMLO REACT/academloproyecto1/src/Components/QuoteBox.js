const QuoteBox  = ({ text }) => {
    return(
        <div className='QuoteBox'>
                <blockquote>
                <b><p className='quote'>{text.quote}</p></b> 
                <p className='quote'>{text.author}</p>
                </blockquote>
        </div>
    )
}

export default QuoteBox;