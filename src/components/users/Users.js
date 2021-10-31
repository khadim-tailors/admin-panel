import React from 'react'

const usersData = [
    { 
        userId: 'xyz1',
        firstName: 'Azeem',
        lastName: 'Mirza',
        phone: '+971556500000',
        email: 'mirza@gmail.com',
        address: 'Deira City Center',
        city: 'Dubai',
        state: 'UAE',
        plan: 'Free'
    },
    { 
        userId: 'xyz2',
        firstName: 'Salman',
        lastName: 'Raza',
        phone: '+971556500000',
        email: 'salman@gmail.com',
        address: 'Abu Shagara',
        city: 'Sharjah',
        state: 'UAE',
        plan: 'Silver'
    },
    { 
        userId: 'xyz3',
        firstName: 'Saud',
        lastName: 'Khan',
        phone: '+971556500000',
        email: 'saud@gmail.com',
        address: 'Clock Tower',
        city: 'Abu Dhabi',
        state: 'UAE',
        plan: 'Gold'
    }
]

function Users() {
    return <div className="mainContent-container">
        {/* <Nav variant="tabs" defaultActiveKey="/home">
            <Nav.Item>
                <Nav.Link href="/home">Active</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="link-1">Option 2</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="disabled" disabled>
                Disabled
                </Nav.Link>
            </Nav.Item>
        </Nav> */}
        <table className="table table-striped table-bordered" style={{verticalAlign: "middle"}}>
                <thead className="table-dark borderless">
                    <tr>
                        <th>Name</th>
                        <th>Phone Number</th>
                        <th>Email ID</th>
                        <th>Location</th>
                        <th>Plan</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        usersData.map(user => {
                            return <tr key={user.id}>
                                <td>{`${user.firstName} ${user.lastName}`}</td>
                                <td>{user.phone}</td>
                                <td>{user.email}</td>
                                <td>{`${user.address}, ${user.city}, ${user.state}`}</td>
                                <td>{user.plan}</td>
                            </tr>
                        })
                    }
                </tbody>
        </table>
    </div>
}

export default Users
