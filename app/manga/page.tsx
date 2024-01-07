import React from 'react'

interface Manga {
    id: string,
    type: string,
    attributes: {
        title: {
            en: string;
        };
    },
    relationships: []
}

const MangaList = async () => {
    const res = await fetch(`${process.env.MANGADEX_BASE_URL}/manga`)
    const mangaList = await res.json()

    console.log(mangaList)


    return (
        <div>
            <div>
                List of manga
            </div>
            {mangaList?.data?.map((x) => (
                <ul key={x.id}>{x.attributes.title.en}</ul>
            ))}
        </div>
    )
}

export default MangaList