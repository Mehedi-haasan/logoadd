import { useEffect, useState } from "react";
import Next from "../Icons/Next"
import SubNext from "../Icons/SubNext";
import Prev from "../Icons/Prev";
import SubPrev from "../Icons/SubPrev";
import TShirtCanvas from "../Components/TShirtCanvas";

function Home() {

    const [tshirtImage, setTshirtImage] = useState(null);
    const [logoImage, setLogoImage] = useState(null);
    const [values, setValues] = useState({
        datas: [{
            "id": 1,
            "name": "Kaylah Weimann",
            "email": "ebert.doris@example.com",
            "email_verified_at": "2025-01-06T13:49:21.000000Z",
            "created_at": "2025-01-06T13:49:21.000000Z",
            "updated_at": "2025-01-06T13:49:21.000000Z"
        },
        {
            "id": 2,
            "name": "Dr. Narciso Stamm IV",
            "email": "kreiger.maureen@example.org",
            "email_verified_at": "2025-01-06T13:49:21.000000Z",
            "created_at": "2025-01-06T13:49:21.000000Z",
            "updated_at": "2025-01-06T13:49:21.000000Z"
        },
        {
            "id": 3,
            "name": "Gerda Schowalter",
            "email": "casimir57@example.com",
            "email_verified_at": "2025-01-06T13:49:21.000000Z",
            "created_at": "2025-01-06T13:49:21.000000Z",
            "updated_at": "2025-01-06T13:49:21.000000Z"
        },
        {
            "id": 4,
            "name": "London Hermann",
            "email": "abel34@example.net",
            "email_verified_at": "2025-01-06T13:49:21.000000Z",
            "created_at": "2025-01-06T13:49:21.000000Z",
            "updated_at": "2025-01-06T13:49:21.000000Z"
        },
        {
            "id": 5,
            "name": "Geraldine Kiehn",
            "email": "nicklaus.larkin@example.org",
            "email_verified_at": "2025-01-06T13:49:21.000000Z",
            "created_at": "2025-01-06T13:49:21.000000Z",
            "updated_at": "2025-01-06T13:49:21.000000Z"
        },
        {
            "id": 6,
            "name": "Prof. Casimer Legros",
            "email": "vsimonis@example.com",
            "email_verified_at": "2025-01-06T13:49:21.000000Z",
            "created_at": "2025-01-06T13:49:21.000000Z",
            "updated_at": "2025-01-06T13:49:21.000000Z"
        },
        {
            "id": 7,
            "name": "Dr. Howard Fay",
            "email": "mitchell.elisha@example.com",
            "email_verified_at": "2025-01-06T13:49:21.000000Z",
            "created_at": "2025-01-06T13:49:21.000000Z",
            "updated_at": "2025-01-06T13:49:21.000000Z"
        },
        {
            "id": 8,
            "name": "Ivy Herzog",
            "email": "elwyn.cronin@example.net",
            "email_verified_at": "2025-01-06T13:49:21.000000Z",
            "created_at": "2025-01-06T13:49:21.000000Z",
            "updated_at": "2025-01-06T13:49:21.000000Z"
        },
        {
            "id": 9,
            "name": "Hadley Orn",
            "email": "zkonopelski@example.net",
            "email_verified_at": "2025-01-06T13:49:21.000000Z",
            "created_at": "2025-01-06T13:49:21.000000Z",
            "updated_at": "2025-01-06T13:49:21.000000Z"
        },
        {
            "id": 10,
            "name": "Prof. Kurt Mills IV",
            "email": "fannie91@example.net",
            "email_verified_at": "2025-01-06T13:49:21.000000Z",
            "created_at": "2025-01-06T13:49:21.000000Z",
            "updated_at": "2025-01-06T13:49:21.000000Z"
        }],
        name: '',
        current_page: 1,
        per_page: 10,
        total: 100,
        last_page: 34,
        next_page_url: null,
        prev_page_url: null

    })

    const FetchData = async () => {
        try {
            const response = await fetch('https://api.razzakfashion.com');
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            setValues({
                ...values,
                datas: data?.data,
                current_page: data?.current_page,
                per_page: data?.per_page,
                total: data?.total,
                last_page: data?.last_page,
                next_page_url: data?.next_page_url,
                prev_page_url: data?.prev_page_url
            })
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const FetchNextData = async () => {
        try {
            const response = await fetch(values?.next_page_url);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            console.log(data, "data");
            setValues({
                ...values,
                datas: data?.data,
                current_page: data?.current_page,
                per_page: data?.per_page,
                total: data?.total,
                last_page: data?.last_page,
                next_page_url: data?.next_page_url,
                prev_page_url: data?.prev_page_url
            })
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const FetchPrevData = async () => {
        try {
            const response = await fetch(values?.next_page_url);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            console.log(data, "data");
            setValues({
                ...values,
                datas: data?.data,
                current_page: data?.current_page,
                per_page: data?.per_page,
                total: data?.total,
                last_page: data?.last_page,
                next_page_url: data?.next_page_url,
                prev_page_url: data?.prev_page_url
            })
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        FetchData()
    }, [])


    const loadImage = (file, callback) => {
        const reader = new FileReader();
        reader.onload = () => {
            const img = new Image();
            img.src = reader.result;
            img.onload = () => callback(img);
        };
        reader.readAsDataURL(file);
    };

    // Handle T-shirt image upload
    const handleTshirtUpload = (e) => {
        const file = e.target.files[0];
        loadImage(file, setTshirtImage);
    };

    // Handle Logo image upload
    const handleLogoUpload = (e) => {
        const file = e.target.files[0];
        loadImage(file, setLogoImage);
    };

    const handleSearch = async (e) => {
        const nam = e.target.value
        setValues({ ...values, name: nam });
        const response = await fetch(`https://api.razzakfashion.com/?paginate=5&search=${nam}`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log(data, "data");
        setValues({
            ...values,
            datas: data?.data,
            current_page: data?.current_page,
            per_page: data?.per_page,
            total: data?.total,
            last_page: data?.last_page,
            next_page_url: data?.next_page_url,
            prev_page_url: data?.prev_page_url
        })

    }


    const FetchLastData = async (value) => {
        try {
            const response = await fetch(`https://api.razzakfashion.com?page=${value}`);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            setValues({
                ...values,
                datas: data?.data,
                current_page: data?.current_page,
                per_page: data?.per_page,
                total: data?.total,
                last_page: data?.last_page,
                next_page_url: data?.next_page_url,
                prev_page_url: data?.prev_page_url
            })
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    return (
        <div>
            <div>
                <input onChange={handleSearch} placeholder="Enter user name" className="border rounded p-1 focus::outline-none my-1 ml-4" />
            </div>
            <div className="relative overflow-x-auto shadow">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="p-4">
                                <div className="flex items-center">
                                    <input id="checkbox-all-search" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                    <label for="checkbox-all-search" className="sr-only">checkbox</label>
                                </div>
                            </th>
                            <th scope="col" className="px-6 py-3">
                                First Name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Last Name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Address
                            </th>
                            <th scope="col" className="px-6 py-3">
                                State
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Phone Number
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            values?.datas?.map((data) => {
                                return <tr key={data?.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                    <td className="w-4 p-4">
                                        <div className="flex items-center">
                                            <input id="checkbox-table-search-1" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                            <label for="checkbox-table-search-1" className="sr-only">checkbox</label>
                                        </div>
                                    </td>
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        {data?.name}
                                    </th>
                                    <td className="px-6 py-4">
                                        {data?.email}
                                    </td>
                                    <td className="px-6 py-4">
                                        Laptop
                                    </td>
                                    <td className="px-6 py-4">
                                        {data?.id}
                                    </td>
                                    <td className="px-6 py-4">
                                        {data?.email_verified_at}
                                    </td>
                                </tr>
                            })
                        }


                    </tbody>
                </table>
            </div>
            <div className="flex justify-end items-center gap-2 py-3 px-3 border">
                <h1>Rows per page</h1>
                <div className="flex justify-end items-center gap-2 border rounded px-2">
                    <input placeholder={`10`} onKeyDown={(e) => {
                        if (e.key === "Enter") {
                            FetchLastData(e.target.value);
                        }
                    }} className="w-7 focus:outline-none" />
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" onClick={() => { }} width="12" height="12" viewBox="0 0 48 48"><path fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M13 30L25 18L37 30" /></svg>
                        <svg xmlns="http://www.w3.org/2000/svg" onClick={() => { }} width="12" height="12" viewBox="0 0 48 48"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M36 18L24 30L12 18" /></svg>
                    </div>

                </div>
                <p>{values?.current_page} - {values?.last_page} of {values?.total}</p>
                <Prev onClick={() => { if (values?.current_page > 1) { FetchLastData(1); } }} className={`${values.current_page > 1 ? 'cursor-pointer' : 'cursor-default text-gray-300'}`} />
                <SubPrev onClick={() => { if (values?.prev_page_url) { FetchPrevData(); } }} className={`${values.prev_page_url ? 'cursor-pointer ' : 'cursor-default text-gray-300'}`} />
                <SubNext onClick={() => { if (values?.next_page_url) { FetchNextData(); } }} className={`${values.next_page_url ? 'cursor-pointer ' : 'cursor-default text-gray-300'}`} />
                <Next onClick={() => { if (values?.current_page < 10) { FetchLastData(values?.last_page); } }} className={`${values.current_page < values?.last_page ? 'cursor-pointer' : 'cursor-default text-gray-300'}`} />
            </div>
        </div>
    );
}

export default Home;
