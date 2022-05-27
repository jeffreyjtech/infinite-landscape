//renders a visual representation of the graph data recieved from the API
/**
 * 
 * @param {*} props 
 * takes in relevant data (graph information)
 * @returns 
 * component with visualization rendered to the user 
 */
function Recents(props) {
  return (
    <div className='mt-4' style={{ height: '500px', border: 'solid 3px black' }} data-testid='recents'>
      <p>
        Recent map here.
      </p>
      <div className='w-75 h-75' style={{ backgroundColor: 'skyblue', justifyContent: 'center', margin: 'auto' }}>
      </div>
    </div>
  )
}

export default Recents;
