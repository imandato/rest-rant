const React = require('react')
const Def = require('./default')

function home () {
    return(
        <Def>
            <main>
                <div className='titleHome'>
                    <h1>REST-Rant</h1>
                </div>
                <div>
                    <img src="./images/dessert.jpg" alt="Overnight Oats" />
                    <div>
                        Photo by <a href="https://unsplash.com/@cravethebenefits?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Brenda Godinez</a> on <a href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
                    </div>
                </div>
                <a className='placesBtn' href="/places">
                    <button className="btn-primary">Places Page</button>
                </a>
                <div className='homeDivContain'>
                    <div className='homeDiv'>
                        <img  src="./images/res1.jpg" alt="restaurant 1" />
                        <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates repellendus velit asperiores quia obcaecati eligendi ut, libero, possimus, odio error minima. Accusamus cupiditate dignissimos veniam eligendi, vitae tenetur quam aliquid!</div>
                    </div>
                    <div className='homeDiv'>
                        <img src="./images/res2.jpg" alt="restaurant 2" />
                        <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure doloribus, quo aliquid ratione voluptas praesentium corrupti odit totam? Sint explicabo alias fuga, deserunt harum quis vitae. Ipsa magnam voluptatum quisquam.</div>
                    </div>
                    <div className='homeDiv'>
                        <img src="./images/res3.jpg" alt="restaurant 3" />
                        <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis soluta est eos enim, minima repudiandae. Sit quam sint maxime deleniti ratione accusamus obcaecati animi maiores quo nam ullam, magnam odit?</div>
                    </div>
                </div>
            </main>
        </Def>
    )
}

module.exports = home