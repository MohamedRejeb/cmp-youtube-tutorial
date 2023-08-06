//
//  KmpAppApp.swift
//  KmpApp
//
//  Created by Mohamed Ben Rejeb on 6/8/2023.
//

import SwiftUI
import Common

@main
struct KmpAppApp: App {
    var body: some Scene {
        WindowGroup {
            ComposeView()
        }
    }
}

struct ComposeView: UIViewControllerRepresentable {
    func makeUIViewController(context: Context) -> some UIViewController {
        // File name "Main" + "Kt" -> "Function Name"
        return MainKt.MainViewController()
    }
    
    func updateUIViewController(_ uiViewController: UIViewControllerType, context: Context) {
        
    }
}
