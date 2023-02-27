import React from 'react'

const BlogCard = ({ children }) => {

    const styles = {
        card: "w-full md:w-[calc(50%_-_1.5rem)] lg:w-1/3 flex flex-col gap-2 bg-slate-700 rounded-lg p-5 border-2 border-slate-600"
    }
    return (
        <div className={styles.card}>
            {children}
        </div>
    )
}

export default BlogCard


export const Image = () => {
    return (
        <img className='w-full h-40 p-4 mb-3 rounded-md bg-' src="" alt="blog image" />
    )

}

export const Overline = () => {
    return <span className='px-4 py-1 text-xs font-bold text-purple-900 bg-purple-200 rounded w-fit' htmlFor="">Article</span>


}

export const Title = () => {
    return <h3 className='text-3xl font-bold'>Our Story</h3>

}

export const Description = () => {
    return (
        <p className='opacity-80 text-slate-200'>Over the past year, Volosoft has undergone many changes! After months of preparation and some hard work, we moved to our new office.
        </p>
    )
}

export const WriterProfile = () => {
    return (
        <>
            <ProfileImage />
            <WriterInfo />
        </>
    )

}

export const ProfileImage = () => {
    return <div>ProfileImage</div>

}

export const WriterInfo = () => {
    return (
        <div className='flex items-center space-x-6'>
            <img className='w-10 h-10 rounded-full' src="" alt="profile image" />
            <div className=''>
                <label className="font-medium " htmlFor="">Jese Leos</label>
                <p className='text-sm text-slate-300'>Aug 15, 2021 . 16 min read</p>
            </div>
        </div>

    )
}

export const WriterName = () => {
    return <div>WriterName</div>

}
export const DateTime = () => {
    return <div>DateTime</div>

}