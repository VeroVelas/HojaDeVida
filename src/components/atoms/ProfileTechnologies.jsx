import moduleStyle from "../../assets/style/cv.module.css"

export default function Technologies({technologies}) {
  return (
    <>
    <p className={moduleStyle.p3}>{technologies}</p>
    </>
  )
}
