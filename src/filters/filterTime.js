export default (time) => {
    let date = new Date(time);
    let year = date.getFullYear()
    let month = (date.getMonth() + 1 + "").padStart(2, "0")
    let day = (date.getDate() + "").padStart(2, "0")
    return `${year}-${month}-${day}`
}