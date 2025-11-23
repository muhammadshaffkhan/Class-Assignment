

import React, { useState } from 'react'
import { Container, Box, TextField, Button, Typography, Alert, Grid } from '@mui/material'

const Signupform = () => {
  const [form, setForm] = useState({ name: '', email: '', password: '', confirm: '' })
  const [errors, setErrors] = useState({})
  const [success, setSuccess] = useState('')

  const validate = () => {
    const e = {}
    if (!form.name || form.name.trim().length < 2) e.name = 'Enter your name (min 2 chars)'
    const emailRe = /^[^@\s]+@[^@\s]+\.[^@\s]+$/
    if (!form.email || !emailRe.test(form.email)) e.email = 'Enter a valid email'
    if (!form.password || form.password.length < 6) e.password = 'Password must be at least 6 characters'
    if (form.password !== form.confirm) e.confirm = 'Passwords do not match'
    return e
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const eObj = validate()
    setErrors(eObj)
    if (Object.keys(eObj).length === 0) {
      setSuccess('Account created successfully!')
      setForm({ name: '', email: '', password: '', confirm: '' })
      setTimeout(() => setSuccess(''), 4000)
    }
  }

  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: 6, p: 3, boxShadow: 2, borderRadius: 2 }}>
        <Typography variant="h5" component="h1" gutterBottom>Sign up</Typography>
        {success && <Alert severity="success" sx={{ mb: 2 }}>{success}</Alert>}
        <Box component="form" noValidate onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Name"
                name="name"
                value={form.name}
                onChange={handleChange}
                error={!!errors.name}
                helperText={errors.name}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                error={!!errors.email}
                helperText={errors.email}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Password"
                name="password"
                type="password"
                value={form.password}
                onChange={handleChange}
                error={!!errors.password}
                helperText={errors.password}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Confirm Password"
                name="confirm"
                type="password"
                value={form.confirm}
                onChange={handleChange}
                error={!!errors.confirm}
                helperText={errors.confirm}
              />
            </Grid>
            <Grid item xs={12} sx={{ mt: 1 }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Button type="submit" variant="contained" color="success">Create account</Button>
                <Typography variant="caption" color="text.secondary">By signing up you agree to our terms.</Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  )
}

export default Signupform