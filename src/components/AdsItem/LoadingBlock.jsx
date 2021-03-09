import React from "react"
import ContentLoader from "react-content-loader"

const LoadingBlock = () => (
  <ContentLoader 
    speed={2}
    width={1130}
    height={160}
    viewBox="0 0 1130 160"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="200" y="40" rx="3" ry="3" width="200" height="35" /> 
    <rect x="200" y="85" rx="3" ry="3" width="450" height="60" /> 
    <rect x="242" y="109" rx="0" ry="0" width="1" height="1" /> 
    <rect x="775" y="85" rx="3" ry="3" width="130" height="25" /> 
    <rect x="1010" y="80" rx="3" ry="3" width="113" height="30" /> 
    <rect x="0" y="30" rx="3" ry="3" width="170" height="130" />
  </ContentLoader>
)

export default LoadingBlock