import React, { useEffect, useState } from 'react'
import { products, tabs } from '../../constants'

const Products = () => {
    const [Tabs, setTabs] = useState(tabs)
    const [filteredProduct, setfilteredProduct] = useState(products)

    useEffect(() => {
        console.log("i am log")
        setfilteredProduct(products.filter((product, i) => {
            return product.category === "energy-products"
        }))
    }, [])


    const handleClick = (selectedTab) => {
        setTabs(Tabs.map((tab, i) => {
            if (tab.slug === selectedTab.slug) {
                return { ...tab, isSelected: true }
            }
            return { ...tab, isSelected: false }
        }))
        setfilteredProduct(products.filter((product, i) => {
            return selectedTab.slug === product.category
        }))
    }
    return (
        <>
            <div className='w-full flex justify-center items-center'>
                {Tabs.map((tab, i) => {
                    const { name, slug, isSelected } = tab
                    return (
                        <div className={`tabs ${isSelected ? "active" : ""}`} key={i} onClick={() => handleClick(tab)}>
                            <span> {name}</span>
                        </div>
                    )
                })}
            </div>
            <div className='w-full flex justify-center items-center flex-wrap p-10 md:pl-[100px] md:pr-[100px]'>
                {
                    filteredProduct.map((product, i) => {
                        const { name, category, url, id, sources } = product
                        return (
                            <div className='product-list w-[100%] md:w-[30%] m-5' key={i}>
                                <div className="post-inner et-item-inner et-clearfix">
                                    <div className="post-image overlay-hover post-media">
                                        <div className="post-image-overlay">
                                            <div className="post-image-overlay-content">
                                                <a className="overlay-read-more" href="https://transmart.ae/Product/sunflower-seeds/" title="Read more about Sunflower Seeds">
                                                </a>
                                            </div>
                                        </div>
                                        <div className="image-container">
                                            <div className="image-loading">
                                            </div>
                                            <div className="image-preloader">
                                            </div>
                                            <img width="100%" height="100%" src={url} alt={name} />
                                        </div>
                                    </div>
                                    <div className="post-body et-clearfix mt-4">
                                        <div className="post-body-inner-wrap">
                                            <div className="post-body-inner">
                                                <div className="stylish-box-wrapper">
                                                    <div className="stylish-box">
                                                        <div className="project-category stylish-dash">
                                                            <a href="https://transmart.ae/Product-category/agro-commodities/" rel="tag">{sources}</a>
                                                        </div>
                                                        <h4 className="post-title mt-2">
                                                            <a href="https://transmart.ae/Product/sunflower-seeds/" title="Read more about Sunflower Seeds" rel="bookmark">{name}</a>
                                                        </h4>
                                                    </div>
                                                    <div className="wrapper mt-2">
                                                        <a href="#"><span>Details</span></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>

        </>

    )
}

export default Products