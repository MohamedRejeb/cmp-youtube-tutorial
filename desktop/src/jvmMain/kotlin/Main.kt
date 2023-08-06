import androidx.compose.ui.window.Window
import androidx.compose.ui.window.application
import com.mohamedrejeb.kmp.app.common.App

fun main() {
    application {
        Window(
            title = "Kmp App",
            onCloseRequest = ::exitApplication
        ) {
            App()
        }
    }
}