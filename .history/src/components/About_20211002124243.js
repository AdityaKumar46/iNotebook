/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import '../index.css'

function About() {
    return (
        <>
            <div className="container my-5">
                <p><h1>This is a website where you can save your notes safely.</h1></p>
            </div>
            <div className="container my-5">
            <div className="container my-5">
            <h3>My other website feel free to visit!</h3>
            </div>
                <div class="row row-cols-1 row-cols-md-2 g-4">
                    <div class="col">
                        <div class="card">
                            <img src="https://images.unsplash.com/photo-1487730116645-74489c95b41b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="YelpCamp">Card title</h5>
                                <p class="card-text">Watch Campgrounds all over the word</p>
                                <p class="card-text">Post and share the interesting campgrounds you have!</p>
                                <a href="https://guarded-river-08859.herokuapp.com/">Campgrounds</a>                              
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card">
                            <img src="https://ewscripps.brightspotcdn.com/dims4/default/92d89b4/2147483647/strip/true/crop/1280x720+0+0/resize/1280x720!/quality/90/?url=http%3A%2F%2Fewscripps-brightspot.s3.amazonaws.com%2F9c%2F26%2Fc2d6c24b401a878dbff84e69f904%2Fam-missoula-7-day.png" class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Weather App</h5>
                                <p class="card-text">Weather App where you watch temperature of your area</p>
                                <p class="card-text">Get condition of Your place's weather, Maximum and Minimum Temperature and many more..</p>
                                <a href="https://guarded-river-08859.herokuapp.com/">Campgrounds</a>
                            </div>
                        </div>
                    </div>

                </div>

            </div>


        </>
    )
}

export default About
