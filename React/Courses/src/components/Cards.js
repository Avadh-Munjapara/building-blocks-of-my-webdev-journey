import Card from './Card';
import { toast } from 'react-toastify';

export default function Cards({courses,category}){

    function getcourses(){
        let allcourses=[];
        if(category==="All"){
            Object.values(courses).forEach(array=> {
                array.forEach(course=>{
                    allcourses.push(course);
                })
            })
        }
        else{
                courses[category].forEach(course=>{
                    allcourses.push(course);
                })
          
        }
        
        return allcourses;
    }
    return (
        <div className="flex gap-4 justify-center flex-wrap w-4/5 m-auto">
            {
                getcourses().map(course=>{
                    return (
                        <Card key={course.id} course={course} />
                    )
                })
            }            
        </div>
    )
}