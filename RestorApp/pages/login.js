export function login() {
  return `
    <div class="login-container">
        <div class="login-card">
            <div class="logo-circle">
                <i class="bi bi-x-diamond-fill"></i>
            </div>
            
            <h2 class="text-center mb-2">RestorApp</h2>
            <p class="text-center text-muted mb-4">Login to your account</p>
            
            <form>
                <div class="mb-3">
                    <label for="fullName" class="form-label">Full Name</label>
                    <div class="input-group">
                        <i class="bi bi-person input-icon"></i>
                        <input type="text" class="form-control" id="fullName" placeholder="e.g. John Doe">
                    </div>
                </div>
                
                <div class="mb-3">
                    <label for="email" class="form-label">Email Address</label>
                    <div class="input-group">
                        <i class="bi bi-envelope input-icon"></i>
                        <input type="email" class="form-control" id="email" placeholder="name@example.com">
                    </div>
                </div>
                
                <div class="mb-4">
                    <label for="role" class="form-label">Select Role</label>
                    <div class="input-group">
                        <i class="bi bi-briefcase input-icon"></i>
                        <select class="form-select" id="role" style="padding-left: 40px;">
                            <option selected>User</option>
                            <option value="1">Admin</option>
                            <option value="2">Manager</option>
                        </select>
                    </div>
                </div>
                
                <button type="submit" class="btn btn-sign-in w-100 mb-3">Sign In</button>
                
                <p class="text-center mb-0">
                    Don't have an account? <a href="#" class="sign-up-link">Sign up</a>
                </p>
            </form>
        </div>
        
        <p class="footer-text">RestorApp Academic Simulation</p>
    </div>
  `;
}
