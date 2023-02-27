import React, { Children } from 'react'

import { BlogCard, Image, Overline, Title, Description, ProfileImage, WriterInfo } from "./blog-card"

const Blogs = () => {
    return (
        <div className='App w-[90%] lg:w-5/6 m-auto mt-16'>
            <BlogIntro />
            <BlogCardWrapper>
                <BlogCard>
                    <Image />
                    <Overline />
                    <Title />
                    <Description />
                    <ProfileImage />
                </BlogCard>
                <BlogCard>
                    <Image />
                    <Overline />
                    <Title />
                    <Description />
                    <ProfileImage />
                </BlogCard>
                <BlogCard>
                    <Image />
                    <Overline />
                    <Title />
                    <Description />
                    <ProfileImage />
                </BlogCard>
            </BlogCardWrapper>
        </div>
    )
}

export default Blogs

const BlogIntro = () => {
    return (
        <>
            <h1 className="text-4xl font-bold mb-8 text-center">
                Daily Blog
            </h1>
            <p className=' md:w-3/4 lg:w-[60%] text-xl m-auto text-center mb-14 text-slate-300'>We use an agile approach to test assumptions and connect with the needs of your audience early and often.</p>
        </>
    )
}

const BlogCardWrapper = ({ children }) => {
    return (
        <div className='w-full flex justify-center sm:justify-start gap-6 lg:m-auto flex-wrap lg:flex-nowrap'>
            {children}
        </div>
    )
}