import React from 'react';
import { Typography, Button, Grid, Card, CardContent, Divider } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const TopJobs = () => {
    const navigate = useNavigate();

    const jobListings = [
        'Job 1',
        'Job 2',
        'Job 3',
        'Job 4',
        'Job 5',
        'Job 6',
        'Job 7',
        'Job 8',
    ];
    const handleSearchMoreCompanies = () => {
        navigate('/jobs');
    };

    return (
        <Card style={{ width: '90%', margin: '0 auto', backgroundColor: '#161616', color: '#ffffff' }}>
            <CardContent>
                <Typography variant="h5" align="center" gutterBottom style={{ color: '#ffffff' }}>
                    Top Jobs 🔥
                </Typography>
                <Divider variant="middle" style={{ marginBottom: '20px', backgroundColor: '#ffffff' }} />
                <Grid container spacing={2}>
                    {jobListings.map((job, index) => (
                        <Grid item xs={12} sm={6} key={index}>
                            <Card style={{ backgroundColor: '#2e2e2e', color: '#ffffff' }}>
                                <CardContent>
                                    <Typography variant="h6" style={{ color: '#ffffff' }}>{job}</Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>

                <div style={{ textAlign: 'center', marginTop: '20px' }}>
                    <Button
                        variant="contained"
                        sx={{
                            backgroundColor: '#636363',
                            '&:hover': {
                                backgroundColor: '#2e2e2e',
                            },
                        }}
                        onClick={handleSearchMoreCompanies}
                    >
                        Search More Jobs
                    </Button>
                </div>
            </CardContent>
        </Card>
    );
};

export default TopJobs;
