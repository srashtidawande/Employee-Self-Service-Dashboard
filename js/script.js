$(document).ready(function() {
    // Tab switching for Feed
    $('.tab-link').on('click', function() {
        $('.tab-link').removeClass('active');
        $(this).addClass('active');
        
        // Logical filtering could go here
        const tabText = $(this).text().toLowerCase();
        if (tabText.includes('unread')) {
            console.log('Filtering for unread items...');
        } else {
            console.log('Showing all items...');
        }
    });

    // Star icon toggle
    $('.star-icon').on('click', function() {
        $(this).toggleClass('fas far');
        $(this).toggleClass('active');
    });

    // Sidebar navigation active state
    $('.nav-item').on('click', function() {
        $('.nav-item').removeClass('active');
        $(this).addClass('active');
    });

    // Simulation of "Mark all as read"
    $('.tab-link.ms-auto').on('click', function() {
        $('.feed-item .badge').fadeOut();
        $('.feed-card .badge.bg-danger').text('0').fadeOut();
    });

    // Add a simple hover effect on summary cards
    $('.summary-card').hover(
        function() { $(this).css('transform', 'translateY(-5px)'); },
        function() { $(this).css('transform', 'translateY(0)'); }
    );

    // Mobile Sidebar Toggle
    $('.mobile-toggle').on('click', function() {
        $('body').addClass('sidebar-open');
    });

    $('.sidebar-overlay').on('click', function() {
        $('body').removeClass('sidebar-open');
    });

    // Close sidebar when a nav item is clicked on mobile
    $('.nav-item').on('click', function() {
        if (window.innerWidth <= 992) {
            $('body').removeClass('sidebar-open');
        }
    });
});
