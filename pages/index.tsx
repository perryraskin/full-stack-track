import React, { useState, useEffect, useContext } from "react"
import { NextPage } from "next"
import Home from "../components/Home/Home"

interface Props {}

const HomePage: NextPage<Props> = ({}) => {
  useEffect(() => {
    fetch(`/api/test`)
  }, [])
  return <Home />
}

export default HomePage
